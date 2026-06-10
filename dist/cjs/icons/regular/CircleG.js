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
var CircleG_exports = {};
__export(CircleG_exports, {
  default: () => CircleG_default
});
module.exports = __toCommonJS(CircleG_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleGRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M360 240H280C266.75 240 256 250.75 256 264S266.75 288 280 288H330.469C326.25 296.578 320.156 304.969 312.562 312.578C282.375 342.797 229.625 342.797 199.438 312.578C168.25 281.375 168.25 230.625 199.438 199.422C229.656 169.172 280.094 167.797 312 196.359C321.812 205.219 337 204.438 345.875 194.5C354.719 184.625 353.875 169.453 344 160.609C293.469 115.313 213.406 117.547 165.5 165.484C115.594 215.391 115.594 296.609 165.5 346.516C189.656 370.688 221.812 384 256 384S322.344 370.688 346.5 346.516C366.031 326.953 379.219 303.078 383.594 279.25C383.875 277.828 384 276.359 384 274.906V264C384 250.75 373.25 240 360 240ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448Z" })
  }
));
CircleGRegular.displayName = "CircleGRegular";
var CircleG_default = CircleGRegular;
