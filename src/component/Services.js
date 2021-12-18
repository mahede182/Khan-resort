import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa"

export default class Services extends Component {
    state={
        Services:[
            {
                icon: <FaCocktail />,
                title: "salmon fish",
                info:"lorem,ipsum dolor sit amet consectatur adipisicing elit magni corporis",
            },

            {
                icon: <FaHiking />,
                title: "Endles hiking",
                info:"lorem,ipsum dolor sit amet consectatur adipisicing elit magni corporis",
            },

            {
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info:"lorem,ipsum dolor sit amet consectatur adipisicing elit magni corporis",
            },

            {
                icon: <FaBeer />,
                title: "strongest beer",
                info:"lorem,ipsum dolor sit amet consectatur adipisicing elit magni corporis",
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />
            <div className="services-center">
                {this.state.Services.map((item,index)=>{
                    return <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                            </article>
                })}    
            </div>    
            </section>
        )
    }
}
