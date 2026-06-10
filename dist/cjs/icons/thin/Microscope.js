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
var Microscope_exports = {};
__export(Microscope_exports, {
  default: () => Microscope_default
});
module.exports = __toCommonJS(Microscope_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MicroscopeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 320H256C273.625 320 288 305.625 288 288V64C288 46.375 273.625 32 256 32V16C256 7.125 248.875 0 240 0H176C167.125 0 160 7.125 160 16V32C142.375 32 128 46.375 128 64V288C128 305.625 142.375 320 160 320ZM144 64C144 55.176 151.178 48 160 48C168.836 48 176 40.836 176 32V16H240V32C240 40.836 247.164 48 256 48C264.822 48 272 55.176 272 64V288C272 296.824 264.822 304 256 304H160C151.178 304 144 296.824 144 288V64ZM104 416H312C316.375 416 320 412.375 320 408S316.375 400 312 400H104C99.625 400 96 403.625 96 408S99.625 416 104 416ZM168 336C163.625 336 160 339.625 160 344S163.625 352 168 352H248C252.375 352 256 348.375 256 344S252.375 336 248 336H168ZM456 448H390.443C447.865 421.266 488 363.406 488 296C488 203.359 412.641 128 320 128C315.578 128 312 131.578 312 136S315.578 144 320 144C403.812 144 472 212.188 472 296S403.812 448 320 448H56C25.125 448 0 473.125 0 504C0 508.422 3.578 512 8 512S16 508.422 16 504C16 481.938 33.938 464 56 464H456C478.062 464 496 481.938 496 504C496 508.422 499.578 512 504 512S512 508.422 512 504C512 473.125 486.875 448 456 448Z" })
  }
));
MicroscopeThin.displayName = "MicroscopeThin";
var Microscope_default = MicroscopeThin;
