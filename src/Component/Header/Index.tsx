import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import IconButton from '@mui/material/IconButton'
import TwitterIcon from '@mui/icons-material/Twitter'
import { headerProps } from './props'

const Header = (props: headerProps) => {
  const { githubLink, linkedInLink, twitterLink } = props

  return (
    <div className="flex justify-between mt-10">
      <div className="hover:text-secondary-500">
        <h1
          className="text-2xl font-medium ml-16 hover:underline cursor-pointer decoration-secondary-500 
			  decoration-4 "
        >
          @_mash
        </h1>
      </div>
      <div className="flex">
        <a target="_blank" rel="noreferrer" href={githubLink}>
          <IconButton>
            <GitHubIcon className="text-black hover:text-secondary-500" />
          </IconButton>
        </a>
        <a target="_blank" rel="noreferrer" href={linkedInLink} className="ml-1">
          <IconButton className="text-black">
            <LinkedInIcon className="text-black hover:text-secondary-500" />
          </IconButton>
        </a>
        <a target="_blank" rel="noreferrer" href={twitterLink} className="ml-1">
          <IconButton className="text-black">
            <TwitterIcon className="text-black hover:text-secondary-500" />
          </IconButton>
        </a>
      </div>
      <div className="fill-current animate-pulse text-secondary-500 mr-16 text-2xl">
        <IconButton>
          <LightbulbIcon className="text-secondary-500" />
        </IconButton>
      </div>
    </div>
  )
}

export default Header
