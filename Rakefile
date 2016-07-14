PAGE_SITE='../ts-editor-site'

desc 'Publish site'
task :pub do
  sh 'webpack'
  cdn = '<script src="https://fb.me/react-15.2.1.min.js"></script><script src="https://fb.me/react-dom-15.2.1.min.js"></script>'
  lines = File.read('index.html').lines

  lines.reject! { |line| line =~ /node_modules/ }
  text = lines.join.sub('<!-- Dependencies -->', cdn)
  File.open("#{PAGE_SITE}/index.html", 'w') do |out|
    out.write(text)
  end

  mkdir_p "#{PAGE_SITE}/dist"
  cp 'dist/bundle.js', "#{PAGE_SITE}/dist"
  cp 'dist/bundle.js.map', "#{PAGE_SITE}/dist"
  Dir.chdir(PAGE_SITE) do
    sh 'git add .'
    sh 'git commit -a -m "Update"'
    sh 'git push'
  end
end
