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
var Tshirt_exports = {};
__export(Tshirt_exports, {
  default: () => Tshirt_default
});
module.exports = __toCommonJS(Tshirt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TshirtDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M577.635 72.949L459.229 11.732C432.629 52.805 378.706 79.25 320.032 79.25C261.329 79.25 207.372 52.805 180.772 11.732L62.366 72.949L133.469 215.156L160.1 200.598L160 480C159.995 497.67 174.317 512 191.989 512H448.012C465.684 512 480.006 497.67 480 480L479.901 200.598L506.532 215.156L577.635 72.949ZM622.221 96L606.067 87.648L534.631 230.52L550.885 239.406C566.661 247.137 585.719 240.705 593.583 224.994L636.627 138.996C644.538 123.193 638.055 103.846 622.221 96ZM17.78 96C1.946 103.846 -4.537 123.193 3.374 138.996L46.418 224.994C54.282 240.705 73.34 247.137 89.116 239.406L105.37 230.52L33.934 87.648L17.78 96Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.102 47.25C320.09 47.25 320.08 47.248 320.068 47.248H320.066C320.055 47.248 320.045 47.25 320.033 47.25H320.031C268.156 47.25 223.656 27.75 203.531 0L180.838 11.732C207.438 52.805 261.395 79.25 320.098 79.25C378.771 79.25 432.695 52.805 459.295 11.732L436.602 0C416.477 27.75 371.977 47.25 320.102 47.25ZM34 87.648L105.436 230.52L133.535 215.156L62.432 72.949L34 87.648ZM577.701 72.949L506.598 215.156L534.697 230.52L606.133 87.648L577.701 72.949Z" })
    ]
  }
));
TshirtDuotone.displayName = "TshirtDuotone";
var Tshirt_default = TshirtDuotone;
