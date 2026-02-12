package main

import (
	_ "github.com/etdan/x-ray/docs"
	"github.com/etdan/x-ray/initiator"
)

// @title			X-ray API
// @version		1.0
// @description	this Backend is for x-ray, a company review platform. this backend/project was build with the intention to providing transparency to the job seekers, and also to give the company a chance to improve their work environment. this project is still in early stage, so expect some breaking changes in the future.
// @securityDefinitions.apikey	BearerToken
// @in							header
// @name						Authorization
// @host			132.145.204.122
// @BasePath		/x_ray
func main() {
	initiator.Init()
}
