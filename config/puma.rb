threads_count = ENV.fetch("RAILS_MAX_THREADS", 3)
threads threads_count, threads_count

port ENV.fetch("PORT", 3000)

# un seul processus : les plugins ssr et solid queue ont besoin de l'application chargée
workers 0

plugin :tmp_restart
plugin :solid_queue if ENV["SOLID_QUEUE_IN_PUMA"]
plugin :inertia_ssr

pidfile ENV["PIDFILE"] if ENV["PIDFILE"]
