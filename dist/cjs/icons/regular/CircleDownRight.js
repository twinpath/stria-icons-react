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
var CircleDownRight_exports = {};
__export(CircleDownRight_exports, {
  default: () => CircleDownRight_default
});
module.exports = __toCommonJS(CircleDownRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleDownRightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224.404 269.656L183.031 311.031C176.172 317.906 174.109 328.219 177.828 337.188S190.297 352 200 352H328C341.25 352 352 341.25 352 328V200C352 190.281 346.156 181.531 337.188 177.812C334.219 176.594 331.094 176 328 176C321.766 176 315.625 178.438 311.031 183.031L269.658 224.406L205.088 159.836C195.719 150.465 180.516 150.465 171.146 159.836L159.834 171.148C150.465 180.516 150.465 195.719 159.834 205.09L224.404 269.656ZM256 496C388.549 496 496 388.547 496 256S388.549 16 256 16S16 123.453 16 256S123.451 496 256 496ZM256 64C361.869 64 448 150.133 448 256S361.869 448 256 448S64 361.867 64 256S150.131 64 256 64Z" })
  }
));
CircleDownRightRegular.displayName = "CircleDownRightRegular";
var CircleDownRight_default = CircleDownRightRegular;
