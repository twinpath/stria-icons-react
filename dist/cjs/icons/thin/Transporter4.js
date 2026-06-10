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
var Transporter4_exports = {};
__export(Transporter4_exports, {
  default: () => Transporter4_default
});
module.exports = __toCommonJS(Transporter4_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Transporter4Thin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 144H320C324.406 144 328 140.422 328 136S324.406 128 320 128H192C187.594 128 184 131.578 184 136S187.594 144 192 144ZM88 392H56V360C56 355.578 52.406 352 48 352S40 355.578 40 360V392H8C3.594 392 0 395.578 0 400S3.594 408 8 408H40V440C40 444.422 43.594 448 48 448S56 444.422 56 440V408H88C92.406 408 96 404.422 96 400S92.406 392 88 392ZM232 16H280C284.406 16 288 12.422 288 8S284.406 0 280 0H232C227.594 0 224 3.578 224 8S227.594 16 232 16ZM224 80H288C292.406 80 296 76.422 296 72S292.406 64 288 64H224C219.594 64 216 67.578 216 72S219.594 80 224 80ZM136 208H376C380.406 208 384 204.422 384 200S380.406 192 376 192H136C131.594 192 128 195.578 128 200S131.594 208 136 208ZM376 448H136C113.938 448 96 465.938 96 488V504C96 508.422 99.594 512 104 512S112 508.422 112 504V488C112 474.766 122.781 464 136 464H376C389.219 464 400 474.766 400 488V504C400 508.422 403.594 512 408 512S416 508.422 416 504V488C416 465.938 398.062 448 376 448ZM504 168H472V136C472 131.578 468.406 128 464 128S456 131.578 456 136V168H424C419.594 168 416 171.578 416 176S419.594 184 424 184H456V216C456 220.422 459.594 224 464 224S472 220.422 472 216V184H504C508.406 184 512 180.422 512 176S508.406 168 504 168ZM408 256H104C99.594 256 96 259.578 96 264S99.594 272 104 272H408C412.406 272 416 268.422 416 264S412.406 256 408 256ZM192 336H320C324.406 336 328 332.422 328 328S324.406 320 320 320H192C187.594 320 184 323.578 184 328S187.594 336 192 336ZM192 400H320C324.406 400 328 396.422 328 392S324.406 384 320 384H192C187.594 384 184 387.578 184 392S187.594 400 192 400Z" })
  }
));
Transporter4Thin.displayName = "Transporter4Thin";
var Transporter4_default = Transporter4Thin;
