import React from 'react';
import {
  Button, Card, Badge, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const styles = {
  badgeStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
  },
  cardStyle: {
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderColor: '#dddddd',
  },
  cardTitleStyle: {
    fontSize: 24,
    fontWeight: 700,
  },
  cardTextStyle: {
    textAlign: 'left',
  },
  buttonStyle: {
    margin: 5,
  },
  cardFooterStyle: {
    backgroundColor: '#f7f7f7',
  },
};

const ProjectCard = ({ project }) => {
  const parseBodyText = (text) => <ReactMarkdown children={text} />;

  return (
    <Col>
      <Card style={styles.cardStyle} text="dark">
        {project?.image && <Card.Img variant="top" src={project.image} />}
        <Card.Body>
          <Card.Title style={styles.cardTitleStyle}>{project.title}</Card.Title>
          <Card.Text style={styles.cardTextStyle}>
            {parseBodyText(project.bodyText)}
          </Card.Text>
        </Card.Body>

        <Card.Body>
          {project?.links?.map((link) => (
            <Button
              key={link.href}
              style={styles.buttonStyle}
              variant="outline-dark"
              onClick={() => window.open(link.href, '_blank')}
            >
              {link.text}
            </Button>
          ))}
        </Card.Body>

        {project?.contributors?.length > 0 && (
          <Card.Body>
            <Card.Text style={{ fontStyle: 'italic', fontSize: '0.9em' }}>
              <strong>Contributors:</strong> {project.contributors.join(', ')}
            </Card.Text>
          </Card.Body>
        )}

        {project?.tags && (
          <Card.Footer style={styles.cardFooterStyle}>
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                pill
                bg="dark"
                text="light"
                style={styles.badgeStyle}
              >
                {tag}
              </Badge>
            ))}
          </Card.Footer>
        )}
      </Card>
    </Col>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    image: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })),
    tags: PropTypes.arrayOf(PropTypes.string),
    contributors: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;
