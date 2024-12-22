/* eslint-disable no-unused-vars */
import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import companies from '../data/companies.json'
import faqs from '../data/faq.json'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



const LandingPage = () => {
  return (
    <main className='flex flex-col gap-10 s:gap-20 py-10 sm:py-20'>
      <section className='text-center'>
        <h1 className='flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter'>
          Find your Dream Job {" "}
          <span className='flex items-center gap-2 sm:gap-6'>
            and get {" "}
            <img src="./Logo.png"
            className='h-14 sm:h-24 lg:h-32'
            />
          </span>
        </h1>
        <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'>
          Explore thousands of job-listings or find the perfect candidate
        </p>
      </section>

      <div>
        <div className='flex justify-center gap-6'>
          <Link to="/jobs">
            <Button variant="blue" size="xl">Find Jobs</Button>
          </Link>
          <Link to="/post-job">
            <Button variant="destructive" size="xl">Post a Job</Button>
          </Link>
        </div>
        {/* {carousel} */}

        <Carousel
        plugins={[Autoplay({ delay: 1500 })]}
         className="w-full py-20">
          <CarouselContent className="flex gap-5 sm:gap-20 items-center">
            {companies.map(({name,id,path})=>{
              return (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                <img 
                src={path} 
                alt={name}
                className='h-9 sm:h-14 object-contain'
                 />
              </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>


        <img src="./banner.jpeg" className='w-full'/>


        <section className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
          <Card>
            <CardHeader>
              <CardTitle>For Job Seekers</CardTitle>
            </CardHeader>
            <CardContent>
              Search and apply for jobs, track applications, and more.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>For Employers</CardTitle>
            </CardHeader>
            <CardContent>
              Post jobs, manage applications and find the best candidate
            </CardContent>
          </Card>
        </section>



        <Accordion type="single" collapsible className='mt-16'>
          {faqs.map((faq,idx) => {
            return (
              <AccordionItem value={`item-${idx+1}`} key={idx}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </main>
  )
}

export default LandingPage