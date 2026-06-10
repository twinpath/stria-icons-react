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
var CassetteTape_exports = {};
__export(CassetteTape_exports, {
  default: () => CassetteTape_default
});
module.exports = __toCommonJS(CassetteTape_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CassetteTapeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.656 32 0 60.654 0 96V416C0 451.346 28.656 480 64 480H512C547.344 480 576 451.346 576 416V96C576 60.654 547.344 32 512 32ZM124.553 464L145.422 385.766C148.203 375.312 157.719 368 168.562 368H407.438C418.281 368 427.797 375.312 430.578 385.766L451.447 464H124.553ZM560 416C560 442.467 538.469 464 512 464H468.016L446.047 381.641C441.391 364.188 425.516 352 407.438 352H168.562C150.484 352 134.609 364.188 129.953 381.641L107.984 464H64C37.531 464 16 442.467 16 416V96C16 69.533 37.531 48 64 48H512C538.469 48 560 69.533 560 96V416ZM416 160H160C124.654 160 96 188.652 96 224C96 259.346 124.654 288 160 288H416C451.346 288 480 259.346 480 224C480 188.652 451.346 160 416 160ZM160 272C133.533 272 112 250.467 112 224S133.533 176 160 176S208 197.533 208 224S186.467 272 160 272ZM201.926 272C215.346 260.27 224 243.225 224 224S215.346 187.73 201.928 176H374.072C360.654 187.73 352 204.775 352 224S360.654 260.27 374.074 272H201.926ZM416 272C389.533 272 368 250.467 368 224S389.533 176 416 176S464 197.533 464 224S442.467 272 416 272Z" })
  }
));
CassetteTapeThin.displayName = "CassetteTapeThin";
var CassetteTape_default = CassetteTapeThin;
