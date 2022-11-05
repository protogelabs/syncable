import { Swiper, SwiperSlide } from 'swiper/react';
import { BackgroundCircles, Button } from '../../components';

import 'swiper/css';

import styles from './onboarding.module.scss';

export const OnboardingPage: React.FC = () => {
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
                        <>
                            <p>
                                <span className='text-primary'>Sync</span> your timetable here
                            </p>

                            <span>We will help you keep yourself organised</span>
                        </>
                        <Button
                            text="Get Started"
                        />
                    </div>
                </BackgroundCircles>
            </SwiperSlide>

        </Swiper>
    )
}