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
var CircleS_exports = {};
__export(CircleS_exports, {
  default: () => CircleS_default
});
module.exports = __toCommonJS(CircleS_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleSRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M262.406 232.938C212.469 219.078 205.719 212.406 208.531 196.625C209.563 190.937 212.688 186.359 217.875 183.016C226.469 177.469 248.719 170.141 301.5 183.594C314.312 186.891 327.438 179.125 330.688 166.281C333.969 153.437 326.219 140.359 313.375 137.094C259.719 123.406 218.906 125.281 191.875 142.656C175.5 153.203 164.656 169.375 161.281 188.203C150 251.578 209.938 268.203 249.594 279.203C299.531 293.063 306.281 299.734 303.469 315.516C302.156 322.828 299.125 327.328 293.344 330.578C275.25 340.672 234.844 336.422 192.781 319.875C180.563 315.125 166.5 321.062 161.656 333.453C156.813 345.781 162.875 359.719 175.219 364.562C193.531 371.734 230.094 384.047 265.844 384.047C283.844 384.047 301.625 380.937 316.781 372.469C335.156 362.187 346.875 345.406 350.719 323.937C362 260.562 302.062 243.938 262.406 232.938ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448Z" })
  }
));
CircleSRegular.displayName = "CircleSRegular";
var CircleS_default = CircleSRegular;
