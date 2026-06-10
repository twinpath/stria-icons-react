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
var Transporter6_exports = {};
__export(Transporter6_exports, {
  default: () => Transporter6_default
});
module.exports = __toCommonJS(Transporter6_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Transporter6Thin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M104 272H408C412.406 272 416 268.422 416 264S412.406 256 408 256H104C99.594 256 96 259.578 96 264S99.594 272 104 272ZM88 40H56V8C56 3.578 52.406 0 48 0S40 3.578 40 8V40H8C3.594 40 0 43.578 0 48S3.594 56 8 56H40V88C40 92.422 43.594 96 48 96S56 92.422 56 88V56H88C92.406 56 96 52.422 96 48S92.406 40 88 40ZM232 16H280C284.406 16 288 12.422 288 8S284.406 0 280 0H232C227.594 0 224 3.578 224 8S227.594 16 232 16ZM504 392H472V360C472 355.578 468.406 352 464 352S456 355.578 456 360V392H424C419.594 392 416 395.578 416 400S419.594 408 424 408H456V440C456 444.422 459.594 448 464 448S472 444.422 472 440V408H504C508.406 408 512 404.422 512 400S508.406 392 504 392ZM376 448H136C113.938 448 96 465.938 96 488V504C96 508.422 99.594 512 104 512S112 508.422 112 504V488C112 474.766 122.781 464 136 464H376C389.219 464 400 474.766 400 488V504C400 508.422 403.594 512 408 512S416 508.422 416 504V488C416 465.938 398.062 448 376 448Z" })
  }
));
Transporter6Thin.displayName = "Transporter6Thin";
var Transporter6_default = Transporter6Thin;
