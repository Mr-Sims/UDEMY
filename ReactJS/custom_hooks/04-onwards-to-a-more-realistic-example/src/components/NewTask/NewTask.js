import useHTTP from '../../hooks/useHTTP';
import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const { isLoading, error, sendRequest: sendTaskRequest } = useHTTP();

  const manageData = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }

  const enterTaskHandler = (taskText) => {

    const request = {
      url: 'https://fir-react-http-deb7f-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: {text: taskText}
    }

    sendTaskRequest(request, manageData.bind(null, taskText))
  }

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
