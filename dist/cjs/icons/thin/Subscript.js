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
var Subscript_exports = {};
__export(Subscript_exports, {
  default: () => Subscript_default
});
module.exports = __toCommonJS(Subscript_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SubscriptThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M344 80C348.422 80 352 76.422 352 72S348.422 64 344 64H320C317.547 64 315.219 65.125 313.703 67.062L176 243.021L38.297 67.062C36.781 65.125 34.453 64 32 64H8C3.578 64 0 67.578 0 72S3.578 80 8 80H28.109L165.844 256L28.109 432H8C3.578 432 0 435.578 0 440S3.578 448 8 448H32C34.453 448 36.781 446.875 38.297 444.938L176 268.979L313.703 444.938C315.219 446.875 317.547 448 320 448H344C348.422 448 352 444.422 352 440S348.422 432 344 432H323.891L186.156 256L323.891 80H344ZM488 496H464V360C464 355.578 460.422 352 456 352H424C419.578 352 416 355.578 416 360S419.578 368 424 368H448V496H424C419.578 496 416 499.578 416 504S419.578 512 424 512H488C492.422 512 496 508.422 496 504S492.422 496 488 496Z" })
  }
));
SubscriptThin.displayName = "SubscriptThin";
var Subscript_default = SubscriptThin;
