import { Button, Container } from "reactstrap";
import styles from "./styles.module.scss";
import SlideComponent from "@/components/common/SlideComponent";
import Link from "next/link";
import { CourseType } from "@/services/courseService";

interface props {
  newestCourses: CourseType[];
}

export default function SlideSection ({ newestCourses }: props){
    return (
      <>
        <Container fluid className="d-flex flex-column align-items-center py-5">
          <p className={styles.sectionTitle}>AULAS JÁ DISPONÍVEIS</p>
          <SlideComponent course={newestCourses} />
          <Link href="/register">
            <Button outline color="light" className={styles.slideSectionBtn}>
              Se cadastre para acessar!
            </Button>
          </Link>
        </Container>
      </>
    );
}