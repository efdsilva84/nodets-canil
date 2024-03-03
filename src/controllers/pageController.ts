import { Request, Response } from "express";

export const home = (req: Request, res: Response)=>{

    res.send('home no controllerr')


}
export const dogs = (req: Request, res: Response)=>{
    res.send('dgos no controllerr')


}
export const cats = (req: Request, res: Response)=>{
    res.send('cats no controllerr')


}
export const fishes = (req: Request, res: Response)=>{
    res.send('fishes no controllerr')


}