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
var BallotCheck_exports = {};
__export(BallotCheck_exports, {
  default: () => BallotCheck_default
});
module.exports = __toCommonJS(BallotCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BallotCheckRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 352H96C87.164 352 80 359.164 80 368V400C80 408.836 87.164 416 96 416H128C136.836 416 144 408.836 144 400V368C144 359.164 136.836 352 128 352ZM96 160H128C136.836 160 144 152.836 144 144V112C144 103.164 136.836 96 128 96H96C87.164 96 80 103.164 80 112V144C80 152.836 87.164 160 96 160ZM344 360H200C186.75 360 176 370.75 176 384S186.75 408 200 408H344C357.25 408 368 397.25 368 384S357.25 360 344 360ZM171.312 220.688C165.062 214.438 154.937 214.438 148.688 220.688L112 257.375L99.312 244.688C93.062 238.438 82.937 238.438 76.688 244.688S70.438 261.063 76.688 267.312L100.688 291.312C103.812 294.438 107.906 296 112 296S120.188 294.438 123.312 291.312L171.312 243.312C177.562 237.062 177.562 226.938 171.312 220.688ZM344 232H232C218.75 232 208 242.75 208 256S218.75 280 232 280H344C357.25 280 368 269.25 368 256S357.25 232 344 232ZM384 0H64C28.654 0 0 28.652 0 64V448C0 483.348 28.654 512 64 512H384C419.346 512 448 483.348 448 448V64C448 28.652 419.346 0 384 0ZM400 448C400 456.824 392.822 464 384 464H64C55.178 464 48 456.824 48 448V64C48 55.176 55.178 48 64 48H384C392.822 48 400 55.176 400 64V448ZM344 104H200C186.75 104 176 114.75 176 128S186.75 152 200 152H344C357.25 152 368 141.25 368 128S357.25 104 344 104Z" })
  }
));
BallotCheckRegular.displayName = "BallotCheckRegular";
var BallotCheck_default = BallotCheckRegular;
