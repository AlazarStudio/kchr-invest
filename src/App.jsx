import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import AboutRegion from './Components/Pages/AboutRegion/AboutRegion'
import AdminPage from './Components/Pages/Admin/AdminPage'
import Block from './Components/Pages/Block'
import ContactsPage from './Components/Pages/ContactsPage/ContactsPage'
import DocsPage from './Components/Pages/DocsPage/DocsPage'
import InvestorsPage from './Components/Pages/InvestorsPage/InvestorsPage'
import LeadershipPage from './Components/Pages/LeadershipPage/LeadershipPage'
import MainPage from './Components/Pages/MainPage/MainPage'
import NewsDetail from './Components/Pages/NewsDetail/NewsDetail'
import NewsPage from './Components/Pages/NewsPage/NewsPage'
import NotFoundPage from './Components/Pages/NotFoundPage/NotFoundPage'
import ProjectDetail from './Components/Pages/ProjectDetail/ProjectDetail'
import Projects from './Components/Pages/Projects/Projects'
import Layout from './Components/Standart/Layout/Layout'

function App() {
	const [isBlock, setIsBlock] = useState(false)

	return (
		<>
			<Routes>
				{isBlock && (
					<>
						<Route index element={<Block />} />
						<Route path='*' element={<Block />} />
					</>
				)}
				{!isBlock && (
					<>
						<Route path='/' element={<Layout />}>
							<Route index element={<MainPage />} />
							<Route path='/news' element={<NewsPage />} />
							<Route path='/news/:id' element={<NewsDetail />} />
							<Route path='/docs' element={<DocsPage />} />
							<Route path='/for-investors' element={<InvestorsPage />} />
							<Route path='/completed-projects' element={<Projects />} />
							<Route
								path='/completed-projects/:id'
								element={<ProjectDetail />}
							/>
							<Route path='/about-region' element={<AboutRegion />} />
							<Route path='/management' element={<LeadershipPage />} />
							<Route path='/contacts' element={<ContactsPage />} />
							<Route path='*' element={<NotFoundPage />} />
						</Route>
						<Route path='/admin/*' element={<AdminPage />} />
						<Route path='*' element={<NotFoundPage />} />
					</>
				)}
			</Routes>
		</>
	)
}

export default App
