import React, { Component } from 'react'
import items from './assets/data'

const RoomContext = React.createContext();


class RoomProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };

    //get data

    componentDidMount(){
        let rooms = this.formatData(items)
        let featuredRooms = rooms.filter(room => room.featured===true)
        
        let maxPrice = Math.max(...rooms.map(item=>item.price))
        let maxSize = Math.max(...rooms.map(item=>item.size))
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading:false,
            price:maxPrice,
            maxPrice,
            maxSize,
        })
    }
    formatData(){
        let tempItems = items.map(item=>{
            let id = item.sys.id
            let images= item.fields.images.map(image=>image.fields.file.url
            );

            let room = {...item.fields,images,id,}
            return room;
        })
        return tempItems;
    }
    getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
      };

      handleChange = event => {
          const target = event.target
          const value = event.type === "checkbox" ? target.checked : target.value
          const name = event.target.name
          this.setState({
              [name]:value
          },this.filterRooms)

          console.log(`name= ${name} value = ${value}`)
      }

      filterRooms = () =>{
          let{
              rooms, type,capacity, price, minSize, maxSize,breakfast,
              pets
          }=this.state
        //   this is for rooms
          let tempRooms = [...rooms];

        //   transformed the values as number=> capacity
         capacity = parseInt(capacity)

        //  price transformation
        price = parseInt(price)

        // breakfast conversion
        // breakfast = Boolean(breakfast)
        // filter of type
          if(type !== 'all'){
              tempRooms = tempRooms.filter(room => room.type ===type)

          }
          //for filter capacity
          if(capacity!==1){
              tempRooms = tempRooms.filter(room=>room.capacity>=capacity)
          }

        //   filter the price
        tempRooms = tempRooms.filter(room => room.price<=price)
        //   filter for size
        tempRooms = tempRooms.filter(room=>room.size >= minSize && room.size <=maxSize)
        // filter for breakfast
        if(breakfast){
            tempRooms = tempRooms.filter(room=>room.breakfast === true)
        }
        // filter pets
        if(pets){
            tempRooms = tempRooms.filter(room=>room.pets === true)
        }
          this.setState({
              sortedRooms:tempRooms,
              
          })
      }

    render() {
        return <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>
            {this.props.children}
        </RoomContext.Provider>
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {
                value => <Component {...props} context = {value}/>
            }
        </RoomConsumer>
    }
}


export {RoomProvider,RoomConsumer,RoomContext}