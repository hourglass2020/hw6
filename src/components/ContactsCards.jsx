import React from 'react'
import ContactCard from './ContactCard';

const ContactsCards = () => {
    return (
        <div className="cardswrapper" >
            {
                items.map((item) => (
                    <ContactCard
                        barColor={item.barColor}
                        avatar={item.avatar}
                        fullname={item.fullname}
                        city={item.city}
                        resume={item.resume} />
                ))
            }
        </div>
    );
}

const items = [
    {
        barColor: "red",
        avatar: "/images/4043233_spirited_no_face_anime_away_nobody.png",
        fullname: "Pouria Aghdampour",
        city: "Tehran",
        resume: "Do mollit aliqua et deserunt occaecat quis Lorem consequat do magna reprehenderit consectetur."
    },
    {
        barColor: "blue",
        avatar: "/images/4043256_indian_male_man_person.png",
        fullname: "Bradly Danforth",
        city: "Mashhad",
        resume: "Do mollit aliqua et deserunt occaecat quis Lorem consequat do magna reprehenderit consectetur."
    },
    {
        barColor: "green",
        avatar: "/images/4043263_muslim_avatar_paranja_woman.png",
        fullname: "Tangela Sternberg",
        city: "Ghom",
        resume: "Do mollit aliqua et deserunt occaecat quis Lorem consequat do magna reprehenderit consectetur."
    },
    {
        barColor: "yellow",
        avatar: "/images/4043262_avatar_muslim_man.png",
        fullname: "Claud Vogan",
        city: "Shiraz",
        resume: "Do mollit aliqua et deserunt occaecat quis Lorem consequat do magna reprehenderit consectetur."
    },
    {
        barColor: "orange",
        avatar: "/images/4043253_halloween_movie_jason_friday.png",
        fullname: "Max Simon",
        city: "Tabriz",
        resume: "Do mollit aliqua et deserunt occaecat quis Lorem consequat do magna reprehenderit consectetur."
    },
    {
        barColor: "cyan",
        avatar: "/images/4043255_beard_male_hipster_man.png",
        fullname: "Younes Ghorbani",
        city: "Boshehr",
        resume: "Do mollit aliqua et deserunt occaecat quis Lorem consequat do magna reprehenderit consectetur."
    },
    {
        barColor: "purple",
        avatar: "/images/4043241_helmet_builder_worker.png",
        fullname: "Iman Madaeni",
        city: "Kerman",
        resume: "Do mollit aliqua et deserunt occaecat quis Lorem consequat do magna reprehenderit consectetur."
    },
    {
        barColor: "violet",
        avatar: "/images/4043232_avatar_batman_hero_comics.png",
        fullname: "Saeed Nazari",
        city: "Nowhere",
        resume: "Do mollit aliqua et deserunt occaecat quis Lorem consequat do magna reprehenderit consectetur."
    }
]

export default ContactsCards;