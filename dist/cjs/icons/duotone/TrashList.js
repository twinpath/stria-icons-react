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
var TrashList_exports = {};
__export(TrashList_exports, {
  default: () => TrashList_default
});
module.exports = __toCommonJS(TrashList_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashListDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M53.188 467C54.75 491.844 76.219 512 101.094 512H314.906C339.781 512 361.25 491.844 362.812 467L384 96H32L53.188 467Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 32H313.889L302.311 8.844C299.602 3.424 294.061 0 288 0H128C121.939 0 116.4 3.424 113.689 8.844L102.111 32H16C7.164 32 0 39.162 0 48V80C0 88.836 7.164 96 16 96H400C408.838 96 416 88.836 416 80V48C416 39.162 408.838 32 400 32ZM512 384H480C462.327 384 448 398.327 448 416V416C448 433.673 462.327 448 480 448H512C529.673 448 544 433.673 544 416V416C544 398.327 529.673 384 512 384ZM608 128H480C462.327 128 448 142.327 448 160V160C448 177.673 462.327 192 480 192H608C625.673 192 640 177.673 640 160V160C640 142.327 625.673 128 608 128ZM576 256H480C462.327 256 448 270.327 448 288V288C448 305.673 462.327 320 480 320H576C593.673 320 608 305.673 608 288V288C608 270.327 593.673 256 576 256Z" })
    ]
  }
));
TrashListDuotone.displayName = "TrashListDuotone";
var TrashList_default = TrashListDuotone;
