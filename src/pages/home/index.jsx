import { Followussection } from "./partials";
import { HeroCarousel } from "./partials/carousel";
import { Collection } from "./partials/collection";
import { Ourblog } from "./partials/Ourblog";
import { Productsection } from "./partials/productsection";

export const Home = () => {
    return (
        <>


        
                
                <HeroCarousel/>
                
                <Productsection/>

                <Collection/>
                
                <Ourblog/>
                
                
                <Followussection/>
        </>
    );
};
