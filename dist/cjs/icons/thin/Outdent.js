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
var Outdent_exports = {};
__export(Outdent_exports, {
  default: () => Outdent_default
});
module.exports = __toCommonJS(Outdent_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OutdentThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440 312H200C195.578 312 192 315.578 192 320S195.578 328 200 328H440C444.422 328 448 324.422 448 320S444.422 312 440 312ZM8 72H440C444.422 72 448 68.422 448 64S444.422 56 440 56H8C3.578 56 0 59.578 0 64S3.578 72 8 72ZM440 184H200C195.578 184 192 187.578 192 192S195.578 200 200 200H440C444.422 200 448 196.422 448 192S444.422 184 440 184ZM440 440H8C3.578 440 0 443.578 0 448S3.578 456 8 456H440C444.422 456 448 452.422 448 448S444.422 440 440 440ZM91.75 346.637C98.25 352.355 107.531 353.637 115.5 349.824C123.094 346.074 128 338.043 128 329.387V182.699C128 174.043 123.094 166.012 115.5 162.262C112.562 160.793 109.375 160.043 106 160.043C100.719 160.043 95.656 161.98 91.781 165.418L7.781 238.762C2.844 243.074 0 249.387 0 256.043S2.844 269.012 7.781 273.324L91.75 346.637ZM18.281 250.824L102.344 177.418C104.75 175.262 106.844 175.855 108.375 176.574C110.594 177.668 112 180.074 112 182.699V329.387C112 332.012 110.594 334.418 108.5 335.449C105.594 336.738 103.492 335.645 102.281 334.605L18.281 261.262C16.844 260.012 16 258.074 16 256.043S16.844 252.074 18.281 250.824Z" })
  }
));
OutdentThin.displayName = "OutdentThin";
var Outdent_default = OutdentThin;
