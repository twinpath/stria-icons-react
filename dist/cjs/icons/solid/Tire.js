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
var Tire_exports = {};
__export(Tire_exports, {
  default: () => Tire_default
});
module.exports = __toCommonJS(Tire_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TireSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M202.135 290.318L140.547 310.324C158.859 349.057 195.883 376.795 240 382.383V317.736C224.154 313.633 210.717 303.758 202.135 290.318ZM192 256C192 240.553 197.695 226.574 206.809 215.518L168.627 162.98C143.764 186.346 128 219.27 128 256C128 264.207 128.941 272.186 130.424 279.967L192.387 259.84C192.309 258.545 192 257.314 192 256ZM256 192C264.287 192 272.15 193.699 279.418 196.566L317.354 144.367C299.053 134.262 278.344 128 256 128S212.947 134.262 194.646 144.367L232.582 196.566C239.85 193.699 247.713 192 256 192ZM305.191 215.518C314.305 226.574 320 240.553 320 256C320 257.314 319.691 258.545 319.613 259.84L381.576 279.967C383.059 272.186 384 264.207 384 256C384 219.27 368.236 186.346 343.373 162.98L305.191 215.518ZM256 0C114.625 0 0 114.625 0 256S114.625 512 256 512S512 397.375 512 256S397.375 0 256 0ZM256 416C167.635 416 96 344.365 96 256S167.635 96 256 96S416 167.635 416 256S344.365 416 256 416ZM272 317.736V382.383C316.117 376.795 353.141 349.057 371.453 310.324L309.865 290.318C301.283 303.758 287.846 313.633 272 317.736ZM288 256C288 238.355 273.645 224 256 224S224 238.355 224 256S238.355 288 256 288S288 273.645 288 256Z" })
  }
));
TireSolid.displayName = "TireSolid";
var Tire_default = TireSolid;
