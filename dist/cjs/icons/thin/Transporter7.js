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
var Transporter7_exports = {};
__export(Transporter7_exports, {
  default: () => Transporter7_default
});
module.exports = __toCommonJS(Transporter7_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Transporter7Thin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M88 296H56V264C56 259.578 52.406 256 48 256S40 259.578 40 264V296H8C3.594 296 0 299.578 0 304S3.594 312 8 312H40V344C40 348.422 43.594 352 48 352S56 348.422 56 344V312H88C92.406 312 96 308.422 96 304S92.406 296 88 296ZM504 72H472V40C472 35.578 468.406 32 464 32S456 35.578 456 40V72H424C419.594 72 416 75.578 416 80S419.594 88 424 88H456V120C456 124.422 459.594 128 464 128S472 124.422 472 120V88H504C508.406 88 512 84.422 512 80S508.406 72 504 72ZM376 448H136C113.938 448 96 465.938 96 488V504C96 508.422 99.594 512 104 512S112 508.422 112 504V488C112 474.766 122.781 464 136 464H376C389.219 464 400 474.766 400 488V504C400 508.422 403.594 512 408 512S416 508.422 416 504V488C416 465.938 398.062 448 376 448Z" })
  }
));
Transporter7Thin.displayName = "Transporter7Thin";
var Transporter7_default = Transporter7Thin;
