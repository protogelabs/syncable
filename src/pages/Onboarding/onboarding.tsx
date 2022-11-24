import { Swiper, SwiperSlide } from 'swiper/react';
import { BackgroundCircles, Button } from '../../components';

import 'swiper/css';

import { Loading } from '../Loading/loading';

import styles from './onboarding.module.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const OnboardingPage: React.FC = () => {
    const navigate = useNavigate();

    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, [])

    if(isLoading) {
        return <Loading/>
    }
    return(
        <Swiper className={styles.swiperContainer}>
            <SwiperSlide className={styles.slide}>
                <BackgroundCircles>
                    <p>Never miss a <span className='text-primary'>Class</span></p> 
                </BackgroundCircles>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
                <BackgroundCircles>
                    <p>
                        Always be <span className="text-primary">notified</span> on <span className="text-primary">time</span> 
                    </p>
                </BackgroundCircles>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
                <BackgroundCircles>
                    <div className={styles.getStartedContainer}>
                        <article>
                            <h3>
                                <span className='text-primary'>Sync</span> your timetable here
                            </h3>
                            <p>We will help you keep yourself organised</p>
                        </article>
                        <div className={styles.buttonContainer}>
                            <Button
                                text="Get Started"
                                onClick={() => navigate('/main/home')}
                            />
                            <div className={styles.bottom}/>
                        </div>
                    </div>
                </BackgroundCircles>
            </SwiperSlide>

        </Swiper>
    )
}