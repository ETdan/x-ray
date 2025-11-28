package initiator

import (
	"context"
	"encoding/json"
	"fmt"
	"log/slog"
)

var (
	colorReset  = "\033[0m"
	colorRed    = "\033[31m"
	colorYellow = "\033[33m"
	colorGreen  = "\033[32m"
	colorCyan   = "\033[36m"
)

type ColorHandler struct{}

func (c *ColorHandler) Enabled(ctx context.Context, level slog.Level) bool {
	return true
}

func (c *ColorHandler) Handle(ctx context.Context, r slog.Record) error {
	var color string
	switch r.Level {
	case slog.LevelError:
		color = colorRed
	case slog.LevelWarn:
		color = colorYellow
	case slog.LevelInfo:
		color = colorGreen
	case slog.LevelDebug:
		color = colorCyan
	default:
		color = colorReset
	}

	// Build a map for JSON output
	logMap := map[string]interface{}{
		// "level": r.Level.String(),
		"msg": r.Message,
	}
	r.Attrs(func(a slog.Attr) bool {
		logMap[a.Key] = a.Value.Any()
		return true
	})

	jsonBytes, err := json.Marshal(logMap)
	if err != nil {
		fmt.Printf("%s[marshal error] %v%s\n", colorRed, err, colorReset)
		return err
	}
	fmt.Printf("%s%s%s\n", color, string(jsonBytes), colorReset)
	return nil
}

func (c *ColorHandler) WithAttrs(attrs []slog.Attr) slog.Handler {
	return c
}

func (c *ColorHandler) WithGroup(name string) slog.Handler {
	return c
}
