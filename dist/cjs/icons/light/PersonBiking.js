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
const PersonBikingLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M250.719 222.578L311.891 171.594C317.266 167.047 325.156 166.656 331 170.562L407.125 221.312C409.75 223.062 412.844 224 416 224H480C488.844 224 496 216.844 496 208S488.844 192 480 192H420.844L348.75 143.938C331.188 132.188 307.625 133.469 291.391 147L230.234 197.984C222.406 204.5 218.219 214.078 218.75 224.266C219.297 234.453 224.469 243.531 232.953 249.203L304 296.562V416C304 424.844 311.156 432 320 432S336 424.844 336 416V288C336 282.656 333.328 277.656 328.875 274.688L250.719 222.578ZM384 128C419.346 128 448 99.346 448 64C448 28.652 419.346 0 384 0S320 28.652 320 64C320 99.346 348.654 128 384 128ZM384 32C401.645 32 416 46.355 416 64S401.645 96 384 96S352 81.645 352 64S366.355 32 384 32ZM128 256C57.309 256 0 313.307 0 384C0 454.691 57.309 512 128 512C198.693 512 256 454.691 256 384C256 313.307 198.693 256 128 256ZM128 480C75.064 480 32 436.934 32 384C32 331.064 75.064 288 128 288S224 331.064 224 384C224 436.934 180.936 480 128 480ZM512 256C441.309 256 384 313.307 384 384C384 454.691 441.309 512 512 512C582.693 512 640 454.691 640 384C640 313.307 582.693 256 512 256ZM512 480C459.064 480 416 436.934 416 384C416 331.064 459.064 288 512 288S608 331.064 608 384C608 436.934 564.936 480 512 480Z" })
  }
));
PersonBikingLight.displayName = "PersonBikingLight";
var PersonBiking_default = PersonBikingLight;
