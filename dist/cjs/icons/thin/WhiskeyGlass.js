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
var WhiskeyGlass_exports = {};
__export(WhiskeyGlass_exports, {
  default: () => WhiskeyGlass_default
});
module.exports = __toCommonJS(WhiskeyGlass_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WhiskeyGlassThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M452.533 64H59.467C42.756 64 30.008 78.789 32.258 95.293L80.248 400.949C84.106 427.957 107.242 448 134.666 448H377.762C404.971 448 428.217 427.957 432.074 400.949L479.742 95.293C481.992 78.789 469.244 64 452.533 64ZM416.235 398.688C413.522 417.68 396.983 432 377.762 432H134.666C115.385 432 98.801 417.68 96.055 398.469L78.709 288H433.496L416.235 398.688ZM435.992 272H76.197L48.112 93.133C47.488 88.566 49.571 85.395 50.865 83.91C52.141 82.449 54.953 80 59.467 80H452.533C457.047 80 459.86 82.449 461.135 83.91C462.43 85.395 464.512 88.566 463.934 92.828L435.992 272Z" })
  }
));
WhiskeyGlassThin.displayName = "WhiskeyGlassThin";
var WhiskeyGlass_default = WhiskeyGlassThin;
