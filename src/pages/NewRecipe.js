import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function NewRecipe() {
  const schema = yup.object().shape({
    imageLink:yup.string().url('Invalid URL').required('This field is required'),
    name: yup.string().min(2,'Text must be least 2 characters').required('This field is required'),
    ingredients: yup.string().min(2,'Text must be at least 2 chracters').required('This field is required'),
    instruction: yup.string().min(2,'Text must be at least 2 characters').required('This field is required')
  });

  const {register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <section className='add-recipe-page'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>New Recipe</h4>

        <input 
        type='text'
        placeholder='Meal name' 
        autoComplete='off'
        {...register('name')}
        aria-invalid={errors.name ? "true": "false"}
        />
        <p className={`error-message ${errors.Title ? 'is-visible' : '' }`}>{errors.name?.message}</p>

        <input 
        type='text' 
        placeholder='Ingredients'
        {...register('ingredients')}
        aria-invalid={errors.ingredients ? "true": "false"}
        />
        <p className={`error-message ${errors.Email ? 'is-visible' : '' }`}>{errors.ingredients?.message}</p>

        <input 
        type='url' 
        placeholder='Image link' 
        autoComplete='off'
        name='imageLink'
        // eslint-disable-next-line
        {...register('imageLink', {pattern:/^(?:(?:https?|ftp):\/\/)?(?:www\.)?(?:[\w-]+\.[\w]{2,})(?:\.[\w]{2,})?\/?(?:[\w#!:.?+=&%@!\-\/])*$/, 
        message:'Invalid Url'})}
        aria-invalid={errors.imageLink ? "true": "false"}
        />
        <p className={`error-message ${errors.Year ? 'is-visible' : '' }`}>{errors.imageLink?.message}</p>

        <select {...register('area', { required:"Select an option"})}>
            <option value="">Select an area</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Italian">Italian</option>
            <option value="Canadian">Canadian</option>
        </select>
        <p className={`error-message ${errors.Genre ? 'is-visible' : '' }`}>{errors.area?.message}</p>

        <textarea 
        placeholder="Cooking instruction.."
        {...register('instruction')}
        aria-invalid={errors.instruction ? "true": "false"}
        >
        </textarea>
        <input type='submit' value='submit' />
      </form>
    </section>
  )
}

export default NewRecipe;