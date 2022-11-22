import style from './Ongoingclass.module.scss'


interface Ongoingclassprop {
    coursecode?: string,
    course?: string,
    theme?: string,
    location?: string,
}

export const Ongoingclass: React.FC<Ongoingclassprop> = ({coursecode,course,theme,location}) => {
    return (
        <div className={style.container}>
            <section className={style.recentclass}>
                <div className={style.line} style={{backgroundColor: `${theme}`}}></div>
                <div className={style.info}>
                    <p>ongoing class</p>
                    <h6>{coursecode}</h6>
                    <p> {course}-{location}</p>
                </div>
            </section>
        </div>
    )
}