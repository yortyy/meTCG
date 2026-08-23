import Image, { StaticImageData } from "next/image";
import bioCSS from '../../ui/bio.module.css';

type CardRowProps = {
    sA: string;
    imgA: StaticImageData;
    sB: string;
    imgB: StaticImageData;
    sC: string;
    imgC: StaticImageData;
};

export default function CardRow({sA, imgA, sB, imgB, sC, imgC }: CardRowProps) {
    return <div className={bioCSS.cardRow}>
        <div><h2>{sA}...</h2><Image className={bioCSS.cardImg} src={imgA} alt="Image A."/></div>
        <div><h2>{sB}...</h2><Image className={bioCSS.cardImg} src={imgB} alt="Image B."/></div>
        <div><h2>{sC}...</h2><Image className={bioCSS.cardImg} src={imgC} alt="Image C."/></div>
    </div>
}
