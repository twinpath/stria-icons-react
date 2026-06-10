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
var PersonBiking_exports = {};
__export(PersonBiking_exports, {
  default: () => PersonBiking_default
});
module.exports = __toCommonJS(PersonBiking_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonBikingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 256C441.25 256 384 313.25 384 384S441.25 512 512 512S640 454.75 640 384S582.75 256 512 256ZM512 464C467.875 464 432 428.125 432 384S467.875 304 512 304S592 339.875 592 384S556.125 464 512 464ZM400 96C426.5 96 448 74.5 448 48S426.5 0 400 0S352 21.5 352 48S373.5 96 400 96ZM128 256C57.25 256 0 313.25 0 384S57.25 512 128 512S256 454.75 256 384S198.75 256 128 256ZM128 464C83.875 464 48 428.125 48 384S83.875 304 128 304S208 339.875 208 384S172.125 464 128 464ZM416 216H480C493.25 216 504 205.25 504 192S493.25 168 480 168H427.531L390.625 121.859C371.453 97.891 336.234 93.875 312.141 112.938L230.859 177.281C216.141 188.922 208.266 207.031 209.781 225.734C211.312 244.422 222 261.031 238.406 270.156L296 302.125V416C296 429.25 306.75 440 320 440S344 429.25 344 416V288C344 279.281 339.266 271.25 331.656 267.016L261.719 228.203C258.469 226.391 257.766 223.438 257.625 221.844C257.5 220.25 257.719 217.234 260.641 214.906L341.922 150.578C345.422 147.875 350.422 148.438 353.156 151.844L397.266 206.984C401.812 212.688 408.703 216 416 216Z" })
  }
));
PersonBikingRegular.displayName = "PersonBikingRegular";
var PersonBiking_default = PersonBikingRegular;
