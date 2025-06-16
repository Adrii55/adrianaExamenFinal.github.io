import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

export function Cards() {
  const [modal, setModal] = useState(null);
  const toggle = (danceId) => setModal(modal === danceId ? null : danceId);

  const dances = [
    {
      id: 1,
      title: "Suri Sicuri",
      image:
        "https://www.affvu.org/cpg/albums/urq2010/suri-sicuris/normal_IMG_0980.jpg",
      description:
        "El Suri Sicuri es una danza tradicional del altiplano boliviano que representa la caza del suri (ñandú andino). Los bailarines, con trajes coloridos y máscaras, imitan los movimientos del ave con saltos y giros. La danza combina elementos rituales con música de zampoñas y bombos, siendo típica de las regiones cercanas al lago Titicaca.",
      price: "70 Bs por Mes",
      origin: "Región Aymara (La Paz, Oruro)",
    },
    {
      id: 2,
      title: "Tinku",
      image: "https://boliviamia.net/Images/ArticlePhotos/tinku01.jpg",
      description:
        "El Tinku es una danza ritual de origen precolombino que representa el encuentro y la confrontación entre comunidades. Originario de Potosí (especialmente Macha), combina movimientos guerreros con coreografías sincronizadas. Los bailarines visten monteras (cascos), polleras multicolores y llevan hondas. El término 'tinku' significa 'encuentro' en quechua.",
      price: "75 Bs por Mes",
      origin: "Potosí (Comunidades Quechuas)",
    },
    {
      id: 3,
      title: "Llamerada",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGPxhCHHsH8s0pmGT_qLbMko068pOn4WS3eQ&s",
      description:
        "La Llamerada o Danza de los Llamaq'as es una de las danzas más antiguas de los Andes, que representa el pastoreo de llamas. Los bailarines llevan trajes bordados con motivos zoomorfos, sombreros de cuero y llevan una honda en la mano. La coreografía imita los movimientos de las llamas y su relación con los pastores.",
      price: "65 Bs por Mes",
      origin: "Altiplano Boliviano (La Paz, Oruro)",
    },
  ];

  return (
    <Container className="my-5 ">
      <h2 className="text-center mb-4">Nuestras Danzas Folclóricas</h2>

      <Row className="g-4 ">
        {dances.map((dance) => (
          <Col md="4" key={dance.id}>
            <Card
              className="h-100 shadow "
              style={{
                backgroundColor: "rgba(200, 250, 200, 0.3)",
                borderColor: "#a3cfbb",
              }}
            >
              <CardImg
                top
                src={dance.image}
                alt={dance.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <CardBody className="d-flex flex-column">
                <CardTitle tag="h5" className="text-center">
                  {dance.title}
                </CardTitle>
                <CardText>{dance.description}</CardText>
                <Button
                  color="primary"
                  className="mt-auto align-self-center"
                  onClick={() => toggle(dance.id)}
                >
                  Inscribirse
                </Button>
              </CardBody>
            </Card>

            <Modal
              isOpen={modal === dance.id}
              toggle={() => toggle(dance.id)}
              centered
            >
              <ModalHeader
                toggle={() => toggle(dance.id)}
                className="bg-primary text-white"
              >
                Danza {dance.title}
              </ModalHeader>
              <ModalBody
                style={{
                  backgroundColor: "rgba(200, 250, 200, 0.3)",
                  borderColor: "#a3cfbb",
                }}
              >
                <div className="text-center mb-3">
                  <img
                    src={dance.image}
                    className="img-fluid rounded mb-3"
                    alt={dance.title}
                    style={{ maxHeight: "200px" }}
                  />
                  <p>{dance.description}</p>
                  <h5>
                    Costo: <span className="text-primary">{dance.price}</span>
                  </h5>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={() => toggle(dance.id)}>
                  Cerrar
                </Button>
              </ModalFooter>
            </Modal>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
