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
var CodeFork_exports = {};
__export(CodeFork_exports, {
  default: () => CodeFork_default
});
module.exports = __toCommonJS(CodeFork_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CodeForkDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 153.246V192C400 244.938 356.938 288 304 288H256V358.754C246.189 354.461 235.395 352 224 352S201.811 354.461 192 358.754V288H144C91.062 288 48 244.938 48 192V153.246C57.811 157.539 68.605 160 80 160S102.189 157.539 112 153.246V192C112 209.656 126.344 224 144 224H304C321.656 224 336 209.656 336 192V153.246C345.811 157.539 356.605 160 368 160S390.189 157.539 400 153.246Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 352C179.816 352 144 387.816 144 432S179.816 512 224 512S304 476.184 304 432S268.184 352 224 352ZM224 456C210.766 456 200 445.234 200 432S210.766 408 224 408S248 418.766 248 432S237.234 456 224 456ZM80 0C35.816 0 0 35.816 0 80S35.816 160 80 160S160 124.184 160 80S124.184 0 80 0ZM80 104C66.766 104 56 93.234 56 80S66.766 56 80 56S104 66.766 104 80S93.234 104 80 104ZM368 0C323.816 0 288 35.816 288 80S323.816 160 368 160S448 124.184 448 80S412.184 0 368 0ZM368 104C354.766 104 344 93.234 344 80S354.766 56 368 56S392 66.766 392 80S381.234 104 368 104Z" })
    ]
  }
));
CodeForkDuotone.displayName = "CodeForkDuotone";
var CodeFork_default = CodeForkDuotone;
