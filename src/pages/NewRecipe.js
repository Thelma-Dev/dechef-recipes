import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


function NewRecipe() {
  const schema = yup.object().shape({
    imageLink:yup.string().url('Invalid URL').required('This field is required'),
    name: yup.string().required('This field is required').min(2,'Text must be least 2 characters'),
    ingredients: yup.string().required('This field is required').min(2,'Text must be at least 2 chracters'),
    instruction: yup.string().required('This field is required').min(2,'Text must be at least 2 characters'),
    area:yup.string().required('Select an option')
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
        <p className={`error-message ${errors.name ? 'is-visible' : '' }`}>{errors.name?.message}</p>

        <input 
        type='text' 
        placeholder='Ingredient'
        {...register('ingredients')}
        aria-invalid={errors.ingredients ? "true": "false"}
        />
        <p className={`error-message ${errors.ingredients ? 'is-visible' : '' }`}>{errors.ingredients?.message}</p>

        <input 
        type='url' 
        placeholder='Image link' 
        autoComplete='off'
        name='imageLink'
        // eslint-disable-next-line
        {...register('imageLink', {pattern:/^(?:(?:https?|ftp):\/\/)?(?:www\.)?(?:[\w-]+\.[\w]{2,})(?:\.[\w]{2,})?\/?(?:[\w#!:.?+=&%@!\-\/])*$/, 
        message:'Invalid URL'})}
        aria-invalid={errors.imageLink ? "true": "false"}
        />
        <p className={`error-message ${errors.imageLink ? 'is-visible' : '' }`}>{errors.imageLink?.message}</p>

        <select {...register('area')}>
            <option value="">Select cusine type</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Italian">Italian</option>
            <option value="Canadian">Canadian</option>
            <option value="Canadian">French</option>
        </select>
        <p className={`error-message ${errors.area ? 'is-visible' : '' }`}>{errors.area?.message}</p>

        <textarea 
        placeholder="Meal prep description.."
        {...register('instruction')}
        aria-invalid={errors.instruction ? "true": "false"}
        >
        </textarea>
        <p className={`error-message ${errors.instruction ? 'is-visible' : '' }`}>{errors.instruction?.message}</p>

        <input type='submit' value='submit'/>
      </form>
    </section>
  )
}

export default NewRecipe;