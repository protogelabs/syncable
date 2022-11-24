import style from './Ongoingclass.module.scss'


interface Ongoingclassprop {
    coursecode?: string,
    course?: string,
    theme?: string,
    location?: string,
}

export const Ongoingclass: React.FC<Ongoingclassprop> = ({ coursecode, course, theme, location }) => {
    return (
        <div className={style.container}>
            <section className={style.recentclass}>
                <div className={style.line} style={{ backgroundColor: `${theme}` }}></div>
                
                <div className={style.info}>
                    <p>Ongoing Class</p>
                    <h6>{coursecode}</h6>
                    <div className={style.container1}>
                        <p> {course}-{location}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
