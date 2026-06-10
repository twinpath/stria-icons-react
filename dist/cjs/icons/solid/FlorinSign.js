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
var FlorinSign_exports = {};
__export(FlorinSign_exports, {
  default: () => FlorinSign_default
});
module.exports = __toCommonJS(FlorinSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlorinSignSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M286.016 125.5L247.471 224H320C337.672 224 352 238.312 352 256S337.672 288 320 288H222.426L172.484 415.625C157.438 454.125 118.266 480 75.016 480H40C17.906 480 0 462.094 0 440S17.906 400 40 400H75.016C85.422 400 94.875 394.438 97.984 386.5L136.529 288H64C46.328 288 32 273.688 32 256S46.328 224 64 224H161.574L211.516 96.375C226.562 57.875 265.734 32 308.984 32H344C366.094 32 384 49.906 384 72S366.094 112 344 112H308.984C298.578 112 289.125 117.562 286.016 125.5Z" })
  }
));
FlorinSignSolid.displayName = "FlorinSignSolid";
var FlorinSign_default = FlorinSignSolid;
