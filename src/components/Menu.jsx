import { useCurriculum } from "./context/CurriculumContext";
import CURRICULUM_DATA from "./data/curriculumData";
import Button from "./Button";

function Menu() {

    const { section, changeSection } = useCurriculum();

    return (
        <nav className="flex flex-col md:flex-row w-full border-l-4 border-b-4 md:border-4 md:border-l-0">
            { CURRICULUM_DATA.sections.map((sec) => (
                <Button

                    key={sec.id}
                    nomeBtn={sec.id}
                    funcaoBtn={() => changeSection(sec.id)}
                    isActive={section.id === sec.id} />


            ))}
        </nav>
    )
};

export default Menu;