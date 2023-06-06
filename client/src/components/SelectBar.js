import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Card, Dropdown } from "react-bootstrap";

const SelectBar = observer(() => {
    const { sample } = useContext(Context)
    return (
        <Card className="mt-4 p-2" >
            <Dropdown className="mt-2" >
                <Dropdown.Toggle style={{ width: "100%" }}>{sample.selectTypes.type || "Выберите тип работы"}</Dropdown.Toggle>
                <Dropdown.Menu >{sample.types.map(type =>
                    <Dropdown.Item key={type.id} onClick={() => sample.setSelectedTypes(type)}>{type.type}</Dropdown.Item>
                )}
                    <Dropdown.Item onClick={() => sample.setSelectedTypes({})}>Любой</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-2">
                <Dropdown.Toggle style={{ width: "100%" }}>{sample.selectLessons.name || "Выберите предмет"}</Dropdown.Toggle>
                <Dropdown.Menu>{sample.lessons.map(lesson =>
                    <Dropdown.Item key={lesson.id} onClick={() => sample.setSelectedLessons(lesson)}>{lesson.name} </Dropdown.Item>
                )

                }
                    <Dropdown.Item onClick={() => sample.setSelectedLessons({})}>Любой</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="mt-2">
                <Dropdown.Toggle style={{ width: "100%" }}>{sample.selectUniversity.university || "Выберите вуз"}</Dropdown.Toggle>
                <Dropdown.Menu>{sample.universities.map(university =>
                    <Dropdown.Item key={university.id} onClick={() => sample.setSelectedUniversity(university)}>{university.university}</Dropdown.Item>
                )}
                    <Dropdown.Item onClick={() => sample.setSelectedUniversity({})}>Любой</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Card >
    );
})

export default SelectBar