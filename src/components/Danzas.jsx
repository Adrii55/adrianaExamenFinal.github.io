import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  ListGroup,
  ListGroupItem,
  Container
} from 'reactstrap';

export function Danzas() {
  const [openAccordion, setOpenAccordion] = useState('1');

  const toggle = (id) => {
    if (openAccordion === id) {
      setOpenAccordion('');
    } else {
      setOpenAccordion(id);
    }
  };

  const regionesDanzas = [
    {
      id: '1',
      region: 'Altiplano',
      danzas: [
        'Morenada',
        'Diablada',
        'Caporales',
        'Kullawada',
        'Llamerada'
      ],
      descripcion: 'Danzas con influencias aimaras que representan tradiciones y leyendas del altiplano boliviano.'
    },
    {
      id: '2',
      region: 'Valles',
      danzas: [
        'Tinku',
        'Pujllay',
        'Auqui-Auqui',
        'Doctorcitos',
        'Waka Waka'
      ],
      descripcion: 'Danzas que reflejan las tradiciones agrícolas y las luchas rituales de los valles bolivianos.'
    },
    {
      id: '3',
      region: 'Oriente',
      danzas: [
        'Taquirari',
        'Chovena',
        'Carnavalito',
        'Brincao',
        'Macheteros'
      ],
      descripcion: 'Danzas con ritmos alegres y movimientos fluidos que representan la cultura de las tierras bajas.'
    },
    {
      id: '4',
      region: 'Amazonía',
      danzas: [
        'Danza del Machetero',
        'Danza de los Pescadores',
        'Danza de los Cazadores',
        'Danza de la Chonta',
        'Danza de los Toritos'
      ],
      descripcion: 'Expresiones dancísticas que muestran la relación de los pueblos amazónicos con la naturaleza.'
    },
    {
      id: '5',
      region: 'Chaco',
      danzas: [
        'Danza del Suri',
        'Danza de los Matacos',
        'Danza de los Weenhayek',
        'Danza de los Tapietes',
        'Danza de los Guaraníes'
      ],
      descripcion: 'Danzas que representan las tradiciones de los pueblos originarios del Chaco boliviano.'
    }
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Danzas</h2>
      <Accordion open={openAccordion} toggle={toggle}>
        {regionesDanzas.map((region) => (
          <AccordionItem key={region.id}>
            <AccordionHeader targetId={region.id}>
              <strong>{region.region}</strong>
            </AccordionHeader>
            <AccordionBody accordionId={region.id}>
              
              <h5>Danzas representativas:</h5>
              <ListGroup flush>
                {region.danzas.map((danza, index) => (
                  <ListGroupItem key={index}>
                    <i className="fas fa-dancing me-2"></i>
                    {danza}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}