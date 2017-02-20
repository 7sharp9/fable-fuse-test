
#r "../node_modules/fable-core/Fable.Core.dll"
#r "../node_modules/fable-powerpack/Fable.PowerPack.dll"

#load "../node_modules/fable-fuse/Observable.fs"
#load "../node_modules/fable-fuse/Apis.fs"

open Fable.Core
open Fuse
open Fable.Import
open Fable.PowerPack
open Fable.PowerPack.Fetch


module test1 =
    let data = Observable.create()
    promise {
        let! req = fetch "http://az664292.vo.msecnd.net/files/ZjPdBhWNdPRMI4qK-colors.json" []
        let! json = req.json ()
        do (data.value <- json) } |> ignore