
import { ProjectInterface } from "@/common.types"
import ProjectCard from "@/components/ProjectCard";
import SearchBar from "@/components/SearchBar";
import { fetchAllProjects } from "@/lib/actions"
import LoadMore from "@/components/LoadMore";
import Image from "next/image";

type ProjectSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  },
}

type searchParams = {
  category?: string
  endcursor?: string
  query?: string
}

type Props = {
  searchParams: searchParams
}

export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0

const SearchPage = async ( { searchParams: { category, endcursor, query }}: Props) => {

  const data = await fetchAllProjects(category, endcursor) as ProjectSearch;

  const projectsToDisplay = data?.projectSearch?.edges || [];

  if(projectsToDisplay.length === 0) {
    return (
      <>
        <SearchBar />
      <section className="flexStart flex-col paddings">
        <p className="no-result-text text-center">No project found, go create some first.</p>
      </section>
      </>
    )
  }

  const pagination = data?.projectSearch?.pageInfo
  

  return (
    <>
    <SearchBar />
    <section className="flex-start flex-col paddings mb-16">
      <section className="projects-grid">
        {projectsToDisplay.map(({ node }: { node: ProjectInterface}) => (
          <ProjectCard 
            key={node?.id}
            id={node?.id}
            image={node?.image}
            title={node?.title}
            name={node?.createdBy?.name}
            avatarUrl={node?.createdBy?.avatarUrl}
            userId={node?.createdBy?.id}/>
        ))}
      </section>

      <LoadMore 
        startCursor={pagination.startCursor}
        endCursor={pagination.endCursor}
        hasPreviousPage={pagination.hasPreviousPage}
        hasNextPage={pagination.hasNextPage}

        />
    </section>
    </>
  )
}

export default SearchPage