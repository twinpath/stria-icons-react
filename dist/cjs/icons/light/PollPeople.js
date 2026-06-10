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
var PollPeople_exports = {};
__export(PollPeople_exports, {
  default: () => PollPeople_default
});
module.exports = __toCommonJS(PollPeople_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PollPeopleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 96C122.51 96 144 74.51 144 48S122.51 0 96 0S48 21.49 48 48S69.49 96 96 96ZM96 32C104.822 32 112 39.178 112 48S104.822 64 96 64S80 56.822 80 48S87.178 32 96 32ZM112 416H80C35.891 416 0 451.891 0 496C0 504.844 7.156 512 16 512S32 504.844 32 496C32 469.531 53.531 448 80 448H112C138.469 448 160 469.531 160 496C160 504.844 167.156 512 176 512S192 504.844 192 496C192 451.891 156.109 416 112 416ZM608 32H256C238.328 32 224 46.326 224 64V160C224 177.674 238.328 192 256 192H608C625.674 192 640 177.674 640 160V64C640 46.326 625.674 32 608 32ZM480 160H256V64H480V160ZM608 160H512V64H608V160ZM112 128H80C35.891 128 0 163.891 0 208C0 216.844 7.156 224 16 224S32 216.844 32 208C32 181.531 53.531 160 80 160H112C138.469 160 160 181.531 160 208C160 216.844 167.156 224 176 224S192 216.844 192 208C192 163.891 156.109 128 112 128ZM608 320H256C238.328 320 224 334.326 224 352V448C224 465.674 238.328 480 256 480H608C625.674 480 640 465.674 640 448V352C640 334.326 625.674 320 608 320ZM352 448H256V352H352V448ZM608 448H384V352H608V448ZM144 336C144 309.49 122.51 288 96 288S48 309.49 48 336S69.49 384 96 384S144 362.51 144 336ZM80 336C80 327.178 87.178 320 96 320S112 327.178 112 336S104.822 352 96 352S80 344.822 80 336Z" })
  }
));
PollPeopleLight.displayName = "PollPeopleLight";
var PollPeople_default = PollPeopleLight;
