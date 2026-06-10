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
var DisplayCode_exports = {};
__export(DisplayCode_exports, {
  default: () => DisplayCode_default
});
module.exports = __toCommonJS(DisplayCode_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DisplayCodeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 0H64C28.654 0 0 28.652 0 64V352C0 387.348 28.654 416 64 416H213.693L194.494 480H144C135.164 480 128 487.164 128 496S135.164 512 144 512H432C440.836 512 448 504.836 448 496S440.836 480 432 480H381.506L362.307 416H512C547.346 416 576 387.348 576 352V64C576 28.652 547.346 0 512 0ZM227.906 480L247.105 416H328.895L348.094 480H227.906ZM544 352C544 369.645 529.645 384 512 384H64C46.355 384 32 369.645 32 352V64C32 46.355 46.355 32 64 32H512C529.645 32 544 46.355 544 64V352ZM235.312 132.688C229.062 126.438 218.937 126.438 212.688 132.688L148.688 196.688C142.438 202.938 142.438 213.063 148.688 219.312L212.688 283.312C215.812 286.438 219.906 288 224 288S232.188 286.438 235.312 283.312C241.562 277.062 241.562 266.937 235.312 260.688L182.625 208L235.312 155.312C241.562 149.062 241.562 138.938 235.312 132.688ZM363.312 132.688C357.062 126.438 346.937 126.438 340.688 132.688S334.438 149.063 340.688 155.312L393.375 208L340.688 260.688C334.438 266.938 334.438 277.063 340.688 283.312C343.812 286.438 347.906 288 352 288S360.188 286.438 363.312 283.312L427.312 219.312C433.562 213.062 433.562 202.937 427.312 196.688L363.312 132.688Z" })
  }
));
DisplayCodeLight.displayName = "DisplayCodeLight";
var DisplayCode_default = DisplayCodeLight;
