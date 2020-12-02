import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import COLORS from '../../../const';
import ColorSelector from '../../ColorSelector';
import Point from '../../Point';

const styles = StyleSheet.create({
    pointContainer: {
        position: "relative",
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: 'center'
    },
    colorSelector: {
        position: "absolute",
        top: -15,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        width: "60%",
        height: "60%",
    }
});

interface Props {
    id: number,
    selectedColor: number,
    setSelectedColor: (colorID: number) => void
    isEdit: boolean,
    setEdit: (id: number | null) => void
}

export default function PointInput(props: Props) {

    const { 
        id, 
        selectedColor,
        setSelectedColor,
        isEdit, 
        setEdit 
    } = props;

    const ref = React.useRef<View>(null);

    const position = React.useMemo(() => {
        if(ref.current) {
            ref.current.measure( (fx, fy, width, height, px, py) => {

                console.log('Component width is: ' + width)
                console.log('Component height is: ' + height)
                console.log('X offset to frame: ' + fx)
                console.log('Y offset to frame: ' + fy)
                console.log('X offset to page: ' + px)
                console.log('Y offset to page: ' + py)
            })
        }
        return null;
    }, [ref])

    return (
        <>
            <View 
                style={styles.colorSelector}
            >
                { isEdit && <ColorSelector setSelectedColor={(index) => {
                    setSelectedColor(index)
                    setEdit(null);
                }} /> }
            </View>
            <View style={styles.pointContainer} ref={ref} onTouchStart={() => setEdit(id)}>
                <Point color={COLORS[selectedColor]}>
                    <Image
                        style={styles.icon}
                        source={{
                            uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADhSURBVHgBjZIxEoIwEEU3KaGGGm6CnkZ7Z+wsrKSw9zTCScQaa2jxL1kwZiDkz/zZyU7eZpONIkfDMOwQ2DkcwT38gmulVGXvVRaUIpzhjNb1gS8o0s6wgFc4oW3NBSb4EQhOagCftNxxDWzgA/x28jlzmszjrIHc3tjmQoGC4dwD8ksTYodQuqczHPlAFlqMyUzCVsxw7ySXQJ5E5uzrtJw0KxAcO2T4aWcARAEgq5rmfCf/z3LVosOjlsWNE6EgmdH9/e1E2kw9IL9PKbP/wVaRAmFP5hp8706gClBt7/0CPmtZk6KaSDYAAAAASUVORK5CYII=",
                        }}
                    />
                </Point>
            </View>
        </>
    )
}