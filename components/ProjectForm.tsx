'use client'

import { ChangeEvent, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { ProjectInterface, SessionInterface } from '@/common.types'
import { categoryFilters } from '@/constans'

import FormField from './FormField'
import CustomMenu from './CustomMenu'
import Button from './Button'
import { createNewProject, fetchToken, updateProject } from '@/lib/actions'

type Props = {
  type: string,
  session: SessionInterface,
  project?: ProjectInterface
}

const ProjectForm = ({ type, session, project }: Props) => {
  const router = useRouter()

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true)

    const { token } = await fetchToken()

    try {
      if(type === 'create') {
        // create project
        await createNewProject(form, session?.user.id, token)
        router.push('/')
      }
      if(type === 'edit') {
        // edit posts
        await updateProject(form, project?.id as string, token)
        router.push('/')
      }
      
    } catch (error) {
      console.log(error)
    }
    finally {
      setIsSubmitting(false)
    }
  }

  const handleChangeImage =(e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];

    if(!file) return;

    if(!file.type.includes('image')) {
      return alert('Please upload an image file');
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result as string;

      handleStateChange('image', result)
    }
  };

  const handleStateChange = (fieldName: string, value: string) => {
    setForm((prevState) => 
      ({...prevState, [fieldName]: value}))

  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [form, setForm] = useState({
    title: project?.title || '',
    description: project?.description || '',
    image: project?.image || '',
    category: project?.category || '',
  })

  return (
    <form 
      onSubmit={handleFormSubmit}
      className='flexStart form'
      >
<div className="flexStart form_image-container">
                <label htmlFor="poster" className="flexCenter form_image-label">
                    {!form.image && 'Choose a poster for your project'}
                </label>
                <input
                    id="image"
                    type="file"
                    accept='image/*'
                    required={type === "create" ? true : false}
                    className="form_image-input"
                    onChange={(e) => handleChangeImage(e)}
                />
                {form.image && (
                    <Image
                        src={form?.image}
                        className="sm:p-10 object-contain z-20" alt="image"
                        fill
                    />
                )}
            </div>

        <FormField 
          title='Title'
          state={form.title}
          placeholder='Dribble'
          setState={(value) => {handleStateChange('title', value)}}
        />
        <FormField 
          title='Description'
          state={form.description}
          placeholder='Showcase and discover remarkable designs projects.'
          setState={(value) => {handleStateChange('description', value)}}
          isTextArea={true}
        />
        
        <CustomMenu
          title='Category'
          state={form.category}
          filters={categoryFilters}
          setState={(value) => handleStateChange('category', value)}
         />

        <div className='flexStart w-full'>
          <Button
            title={
              isSubmitting 
                ? `${type === 'create'
                  ? 'Creating' : 'Editing'}`
                : `${type === 'create' 
                  ? 'Create' : 'Edit'}`
                }
            type='submit'
            leftIcon={isSubmitting ? "" : '/plus.svg'}
            isSubmitting={isSubmitting}
            />
        </div>


    </form>
  )
}

export default ProjectForm