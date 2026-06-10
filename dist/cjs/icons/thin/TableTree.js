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
var TableTree_exports = {};
__export(TableTree_exports, {
  default: () => TableTree_default
});
module.exports = __toCommonJS(TableTree_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TableTreeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 32H64C28.641 32 0 60.641 0 96V416C0 451.359 28.641 480 64 480H448C483.359 480 512 451.359 512 416V96C512 60.641 483.359 32 448 32ZM496 416C496 442.469 474.469 464 448 464H64C37.531 464 16 442.469 16 416V176H96V344C96 366.062 113.938 384 136 384H248C252.422 384 256 380.406 256 376S252.422 368 248 368H136C122.766 368 112 357.219 112 344V288H184C188.422 288 192 284.422 192 280S188.422 272 184 272H112V176H496V416ZM496 160H16V96C16 69.531 37.531 48 64 48H448C474.469 48 496 69.531 496 96V160ZM408 368H296C291.578 368 288 371.594 288 376S291.578 384 296 384H408C412.422 384 416 380.406 416 376S412.422 368 408 368ZM232 288H408C412.422 288 416 284.422 416 280S412.422 272 408 272H232C227.578 272 224 275.578 224 280S227.578 288 232 288Z" })
  }
));
TableTreeThin.displayName = "TableTreeThin";
var TableTree_default = TableTreeThin;
