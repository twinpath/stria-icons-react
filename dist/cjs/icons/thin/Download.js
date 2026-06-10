var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Download_exports = {};
__export(Download_exports, {
  default: () => Download_default
});
module.exports = __toCommonJS(Download_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DownloadThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 352H392C387.582 352 384 355.582 384 360S387.582 368 392 368H480C488.822 368 496 375.178 496 384V480C496 488.822 488.822 496 480 496H32C23.178 496 16 488.822 16 480V384C16 375.178 23.178 368 32 368H120C124.418 368 128 364.418 128 360S124.418 352 120 352H32C14.326 352 0 366.326 0 384V480C0 497.672 14.326 512 32 512H480C497.674 512 512 497.672 512 480V384C512 366.326 497.674 352 480 352ZM464 432C464 414.398 449.6 400 432 400S400 414.398 400 432C400 449.598 414.4 464 432 464S464 449.598 464 432ZM416 432C416 423.178 423.178 416 432 416S448 423.178 448 432S440.822 448 432 448S416 440.822 416 432ZM250.344 413.656C253.469 416.781 258.531 416.781 261.656 413.656L413.656 261.656C415.219 260.094 416 258.062 416 256S415.219 251.906 413.656 250.344C410.531 247.219 405.469 247.219 402.344 250.344L264 388.688V8C264 3.594 260.422 0 256 0S248 3.594 248 8V388.688L109.656 250.344C106.531 247.219 101.469 247.219 98.344 250.344S95.219 258.531 98.344 261.656L250.344 413.656Z" })
  }
));
DownloadThin.displayName = "DownloadThin";
var Download_default = DownloadThin;
