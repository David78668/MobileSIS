import React from 'react'
import { View } from "react-native"
import Carousel, {Pagination} from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'


const CreateDictionary = (dayAmount:number) => {
  const data = {
    "Days":[
        {
            "Date":"2021-12-07",
            "Lessons":[
                {
                   "Id":2,
                   "Name":"Matematika",
                   "ShortName":"MAT",
                   "Teacher":"Zlata Karpiskova",
                   "TeacherShortName":"KR",
                   "StartTime":"08:30",
                   "Classroom":"205",
                   "Group":"p",
                   "LessonType":"",
                   "Url":"Meet"
                },
    {
                   "Id":90,
                   "Name":"Základy elektrotechniky",
                   "ShortName":"ZEL",
                   "Teacher":"Jiří Špičan",
                   "TeacherShortName":"ŠP",
                   "StartTime":"09:30",
                   "Classroom":"309",
                   "Group":"p",
                   "LessonType":"",
                   "Url":"Meet"
                },
    {
                   "Id":69,
                   "Name":"Výpočetní technika",
                   "ShortName":"VYT",
                   "Teacher":"Jarda Hývl",
                   "TeacherShortName":"HB",
                   "StartTime":"10:30",
                   "Classroom":"388",
                   "Group":"p",
                   "LessonType":"",
                   "Url":"Meet"
                },
    {
                   "Id":88,
                   "Name":"Technické kreslení",
                   "ShortName":"TEK",
                   "Teacher":"Richard Rejthar",
                   "TeacherShortName":"RR",
                   "StartTime":"11:30",
                   "Classroom":"205",
                   "Group":"p",
                   "LessonType":"",
                   "Url":"Meet"
                }
            ]
        },
  {
            "Date":"2021-12-08",
            "Lessons":[
                {
                   "Id":2,
                   "Name":"Fyzika",
                   "ShortName":"FYZ",
                   "Teacher":"Jan Lang",
                   "TeacherShortName":"LN",
                   "StartTime":"07:30",
                   "Classroom":"206",
                   "Group":"p",
                   "LessonType":"",
                   "Url":"Meet"
                },
    {
                   "Id":2,
                   "Name":"Fyzika",
                   "ShortName":"FYZ",
                   "Teacher":"Jan Lang",
                   "TeacherShortName":"LN",
                   "StartTime":"08:30",
                   "Classroom":"206",
                   "Group":"p",
                   "LessonType":"",
                   "Url":"Meet"
                },
    {
                   "Id":2,
                   "Name":"Fyzika",
                   "ShortName":"FYZ",
                   "Teacher":"Jan Lang",
                   "TeacherShortName":"LN",
                   "StartTime":"09:30",
                   "Classroom":"206",
                   "Group":"p",
                   "LessonType":"",
                   "Url":"Meet"
                },
    {
                   "Id":2,
                   "Name":"Fyzika",
                   "ShortName":"FYZ",
                   "Teacher":"Jan Lang",
                   "TeacherShortName":"LN",
                   "StartTime":"10:30",
                   "Classroom":"206",
                   "Group":"p",
                   "LessonType":"",
                   "Url":"Meet"
                }
            ]
        },
  {
            "Date":"2021-12-09",
            "Lessons":[
                {
                   "Id":2,
                   "Name":"Eltektrotechnická zařízení",
                   "ShortName":"ELZ",
                   "Teacher":"Jan Lang",
                   "TeacherShortName":"LN",
                   "StartTime":"07:30",
                   "Classroom":"206",
                   "Group":"p",
                   "LessonType":"",
                   "Url":"Meet"
                },
    {
                   "Id":2,
                   "Name":"Eltektrotechnická zařízení",
                   "ShortName":"ELZ",
                   "Teacher":"Jan Lang",
                   "TeacherShortName":"LN",
                   "StartTime":"08:30",
                   "Classroom":"206",
                   "Group":"p",
                   "LessonType":"",
                   "Url":"Meet"
                },
    {
                   "Id":2,
                   "Name":"Eltektrotechnická zařízení",
                   "ShortName":"ELZ",
                   "Teacher":"Jan Lang",
                   "TeacherShortName":"LN",
                   "StartTime":"09:30",
                   "Classroom":"206",
                   "Group":"p",
                   "LessonType":"",
                   "Url":"Meet"
                },
    {
                   "Id":2,
                   "Name":"Eltektrotechnická zařízení",
                   "ShortName":"ELZ",
                   "Teacher":"Jan Lang",
                   "TeacherShortName":"LN",
                   "StartTime":"10:30",
                   "Classroom":"206",
                   "Group":"p",
                   "LessonType":"",
                   "Url":"Meet"
                }
            ]
        }
    ]
  }
    const dict = [];
    for (let i = 0; i < dayAmount; i++) {
        dict.push({
            key:   data['Days'][i]['Date'],
            value: data['Days'][i]['Lessons']
        });
    } 
    return dict;
    
}

const schedule : any = CreateDictionary(3);
const CarouselCards = () => {
  

  const date = new Date();
  const readableDate = date.toISOString().split('T')[0];
  
  const isCarousel = React.useRef(null)

  return (
    <View>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={schedule[readableDate]}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
      
    </View>

  )
}




export default CarouselCards